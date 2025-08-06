import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { showSuccessToast, showErrorToast } from "./ToastNotification/Notification";
import { APIURL } from "../GlobalAPIURL";

const OtpVerification = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const email = sessionStorage.getItem("UserEmail");

  const [code, setCode] = useState(new Array(4).fill(""));
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleResendOTP = async () => {
    if (!canResend) return;
    try {
      setCanResend(false);
      setTimeLeft(60);

      const response = axios.get(`${APIURL}resendOtp/${userId}`);
      console.log(response);

      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

    
      showSuccessToast("OTP resent successfully");
    } catch (err) {
      showErrorToast(err.response?.data?.msg || "Failed to resend OTP");
    }
  };

  const handleChange = (element, index) => {
    const value = element.value;
    if (!/^\d?$/.test(value)) return;

    let newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < code.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const userOtp = code.join("");

    try {
      const response =await axios.post(`${APIURL}user_otp_verify/${userId}`,{otp:userOtp})
       if (response.status === 200) {
        showSuccessToast(response.data.msg);
        navigate('/login');
      }
      }
    catch (err) {
      showErrorToast(err.response?.data?.msg || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-50 py-12">
      <div className="bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="font-semibold text-3xl text-green-700">
              <p>Email Verification</p>
            </div>
            <div className="text-sm font-medium text-gray-500">
              <p>
                We have sent a code to your email -{" "}
                <span className="font-bold">{email}</span>
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-16">
              <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                {code.map((data, index) => (
                  <div key={index} className="w-16 h-16">
                    <input
                      id={`otp-input-${index}`}
                      className="w-full h-full flex items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-300 text-lg bg-white focus:bg-gray-50 focus:ring-2 ring-green-600"
                      type="text"
                      maxLength="1"
                      value={data}
                      onChange={(e) => handleChange(e.target, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onFocus={(e) => e.target.select()}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col space-y-5">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl text-sm font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Verifying..." : "Verify Account"}
                </button>

                <div className="text-sm text-center text-gray-500">
                  <p>
                    Didn’t receive code?{" "}
                    {canResend ? (
                      <button
                        type="button"
                        onClick={handleResendOTP}
                        className="text-green-600 hover:underline font-medium ml-1"
                      >
                        Resend
                      </button>
                    ) : (
                      <span className="font-medium">Resend in {timeLeft}s</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
