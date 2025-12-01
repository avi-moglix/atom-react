import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const jsxCode = `
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const step1Schema = yup.object().shape({
  financeType: yup.string().required('Please select finance type'),
  financeAmount: yup.string().required('Finance amount is required'),
  phoneNumber: yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
  isOtpVerified: yup.boolean()
    .oneOf([true], 'Please verify your phone number'),
  companyWebsite: yup.string().notRequired().default(''),
});



const step2Schema = yup.object().shape({
  fullName: yup.string().required('Full name is required'),
  companyName: yup.string().required('Company name is required'),
  emailId: yup.string().email('Invalid email').required('Email is required'),
  financeTimeline: yup.string().required('Please select when you need finance'),
});


  const [step, setStep] = useState(1);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendTimer]);

  const step1Form = useForm({
    resolver: yupResolver(step1Schema),
    defaultValues: {
      financeType: '',
      financeAmount: '',
      currency: 'INR',
      phoneNumber: '',
      otp: ['', '', '', '', '', ''],
      isOtpVerified: false,
      companyWebsite: '',
    }
  });

  const step2Form = useForm({
    resolver: yupResolver(step2Schema),
    defaultValues: {
      fullName: '',
      companyName: '',
      emailId: '',
      financeTimeline: '',
    }
  });

  const handleFinanceTypeChange = (type) => {
    step1Form.setValue('financeType', type);
    step1Form.setValue('currency', type === 'domestic' ? 'INR' : 'USD');
  };

  const handleSendOtp = () => {
    const phoneNumber = step1Form.getValues('phoneNumber');
    if (phoneNumber && phoneNumber.length === 10) {
      // Implement OTP sending logic here
      setIsOtpSent(true);
      console.log('Sending OTP...');
    } else {
      step1Form.setError('phoneNumber', {
        type: 'manual',
        message: 'Please enter a valid phone number'
      });
    }
  };

  const handleVerifyOtp = () => {
    const otpValue = step1Form.getValues('otp').join('');
    if (otpValue.length === 6) {
      // Implement OTP verification logic here
      step1Form.setValue('isOtpVerified', true);
    }
  };

  const handleOtpChange = (index, value) => {
    const otp = step1Form.getValues('otp');
    // Only allow numbers
    if (value && !/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    step1Form.setValue('otp', newOtp);

    // Auto focus next input
    if (value && index < 5) {
      const nextInput = document.querySelector(\`input[name="otp-\${index + 1}"]\`);
      if (nextInput) nextInput.focus();
    }

    // If all digits are filled, trigger verification
    if (newOtp.every(digit => digit !== '')) {
      handleVerifyOtp();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !step1Form.getValues('otp')[index] && index > 0) {
      const prevInput = document.querySelector(\`input[name="otp-\${index - 1}"]\`);
      if (prevInput) {
        prevInput.focus();
        e.preventDefault();
      }
    }
  };

  const handleResendOtp = (e) => {
    e.preventDefault();
    handleSendOtp();
    setResendTimer(30);
  };

  const onStep1Submit = (data) => {
     console.log(data)
      setStep(2);
    
  };

  const handleBack = () => {
    setStep(1);
  };

  const onStep2Submit = (data) => {
    const finalData = {
      ...step1Form.getValues(),
      ...data
    };
    console.log('Form submitted:', finalData);
    setShowThankYou(true);
  };

  if (showThankYou) {
    return (
      <div className="w-full pb-[40px] shadow-icon-btn-shadow text-center rounded-[8px] py-4  px-5 sm:px-[16px] lg:w-full lg:max-w-[450px] md:max-w-[350px] sm:w-full md:relative md:m-auto md:mb-5">
        <h2 className='text-green-600 mb-5'>Thank You!</h2>
        <p className='text-gray-600 mb-2'>Your finance request has been submitted successfully.</p>
        <p className='text-gray-600 mb-2'>We will get back to you within 24 hours.</p>
      </div>
    );
  }
`;
export const htmlCode = `
 <div className=" w-full pb-[40px] shadow-icon-btn-shadow rounded-[8px] py-4  px-5 sm:px-[16px] lg:w-full lg:max-w-[450px] md:max-w-[350px] sm:w-full md:relative md:m-auto md:mb-5">
     
    
     
      {step === 1 ? (
        <div className='border border-bordercolor rounded-md p-[15px] sm:p-1 '>
     
              <h3 className='text-base mb-3 text-[#2c2c2c]'>Get Upto <span className='font-bold'> 95% Working Capital </span> Of Your Invoice Value <span className='font-bold'> Within 24 Hours </span></h3>

        <form onSubmit={step1Form.handleSubmit(onStep1Submit)} className="">
          <div className="flex items-center mt-[5px]">
            <div className='flex items-center mr-3 sm:mr-1'>

            
              <input
              className='cursor-pointer h-3 w-3'
                type="checkbox"
                checked={step1Form.watch('financeType') === 'domestic'}
                onChange={() => handleFinanceTypeChange('domestic')}
                id="option1"
              />
               <label htmlFor="option1" className='cursor-pointer relative pl-1 ml-2 text-base sm:text-sm text-[#022B5C]'>  Domestic
            </label>
            </div>
              <div className='flex items-center mr-3 sm:mr-1'>

              
              <input
              className='cursor-pointer h-3 w-3'
                type="checkbox"
                checked={step1Form.watch('financeType') === 'export_import'}
                onChange={() => handleFinanceTypeChange('export_import')}
                id="option2"
              />
             <label htmlFor="option2"  className='cursor-pointer relative pl-1 ml-2 text-base sm:text-sm text-[#022B5C]'>  Export & Import
            </label>
            </div>
         
          </div>
          {step1Form.formState.errors.financeType && (
              <span className="error">{step1Form.formState.errors.financeType.message}</span>
            )}
          <div className="mt-3">
            <label className='text-sm font-medium text-secondary'>Finance Required*</label>
            <div className="mt-1 flex rounded-md">
              <select
              className='inline-flex w-[70px] justify-center text-sm items-center h-[40px] rounded-l-md border border-[#d9d9d9]  border-r-0 px-2 text-gray-500 sm:text-sm'
                value={step1Form.watch('currency')}
                disabled
              >
                <option value="INR">INR</option>
                <option value="USD">USD</option>
              </select>
              <input
              className='block w-full min-w-0 text-sm flex-1 pl-1 rounded-none h-[40px] rounded-r-md border py-1.5  border-[#d9d9d9]  focus:border-[#555] focus:ring-[#555] focus:outline-none'
                type="number"
                {...step1Form.register('financeAmount')}
              />
            </div>
            {step1Form.formState.errors.financeAmount && (
              <span className="error">{step1Form.formState.errors.financeAmount.message}</span>
            )}
          </div>

          <div className="mt-3">
            <label className='text-sm font-medium text-secondary'>Phone Number*</label>
            <div className="mt-1 flex rounded-md relative">
              <input
              className='block w-full min-w-0 text-sm flex-1 pl-3 rounded-md h-[40px] rounded-r-md border py-1.5  border-[#d9d9d9] autofill:!bg-white '
                type="tel"
                {...step1Form.register('phoneNumber')}
              />
               {step1Form.watch('isOtpVerified') && (
              <span className="absolute flex items-center top-[5px] right-[90px] sm:right-[85px] z-10 bg-[#E0FDDF] px-2 sm:px-1 text-xs text-[#299E22] h-[30px] rounded-md">
               <svg className="mr-[5px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z" fill="rgba(41,158,34,1)"></path></svg>
                Verified</span>
            )}
              <button 
              className='top-0 bottom-0 absolute right-0 rounded-r-md text-xs text-center px-1 w-[81px] disabled:bg-[#ddd] disabled:text-[#888] disabled:cursor-not-allowed bg-[#e3a200] text-black'
                type="button" 
                onClick={handleSendOtp}
                disabled={step1Form.watch('isOtpVerified')}
              >
                Send OTP
              </button>
            </div>
            {step1Form.formState.errors.phoneNumber && (
              <span className="error">{step1Form.formState.errors.phoneNumber.message}</span>
            )}
            
            {isOtpSent && !step1Form.watch('isOtpVerified') && (
              <div className="mt-3">
                <label className="text-sm font-medium text-secondary">Enter OTP*</label>
                <div className="flex gap-2 mt-1 ">
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <input
                      key={index}
                      name={\`otp-\${index}\`}
                      type="text"
                      maxLength={1}
                      className=" h-[50px] font-semibold text-center text-lg border w-[16.66%] border-[#d9d9d9] rounded-md focus:border-[#555] focus:ring-[#555] focus:outline-none"
                      value={step1Form.watch('otp')[index]}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    />
                  ))}
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <button
                    type="button"
                    className="text-xs font-semibold text-[#022b5c]"
                    onClick={handleResendOtp}
                    disabled={resendTimer > 0}
                  >
                    {resendTimer > 0 ? \`Resend OTP in \${resendTimer}s\` : 'Resend OTP'}
                  </button>
                </div>
              </div>
            )}
           
            {step1Form.formState.errors.isOtpVerified && (
              <span className="error">{step1Form.formState.errors.isOtpVerified.message}</span>
            )}
          </div>

          <div className="mt-3">
            <label className='text-sm font-medium text-secondary'>Company Website (Optional)</label>
            <input
              className='block w-full min-w-0 text-sm flex-1 pl-3 rounded-md h-[40px] rounded-r-md border py-1.5  border-[#d9d9d9] autofill:!bg-white '
              type="text"
              {...step1Form.register('companyWebsite')}
            />
        
          </div>

          <button 
            type="submit" 
            className="mt-4 disabled:bg-[#999] py-1 px-3 rounded-md h-[40px] text-white text-sm w-full bg-gradient-to-r from-[#022B5C] to-[#0363C4] shadow-lg transition-all duration-300 hover:from-[#0363C4] hover:to-[#022B5C]"
          >
            Get Financed
          </button>
        </form>
        </div>
      ) : (
        <>
           <button 
              type="button" 
              className="back-button"
              onClick={handleBack}
            >
              Back
            </button>
      
        <div className='border border-bordercolor rounded-md p-[15px] sm:p-1 '>
              
            <form onSubmit={step2Form.handleSubmit(onStep2Submit)} >
          <div className="mt-3">
            <label className='text-sm font-medium text-secondary'>Full Name*</label>
            <input
            className="block w-full min-w-0 text-sm flex-1 pl-1  h-[40px] rounded-md border py-1.5  border-[#d9d9d9]  focus:border-[#555] focus:ring-[#555] focus:outline-none"
              type="text"
              {...step2Form.register('fullName')}
            />
            {step2Form.formState.errors.fullName && (
              <span className="error">{step2Form.formState.errors.fullName.message}</span>
            )}
          </div>

          <div className="mt-3">
            <label className='text-sm font-medium text-secondary'>Company Name*</label>
            <input
            className="block w-full min-w-0 text-sm flex-1 pl-1  h-[40px] rounded-md border py-1.5  border-[#d9d9d9]  focus:border-[#555] focus:ring-[#555] focus:outline-none"
              type="text"
              {...step2Form.register('companyName')}
            />
            {step2Form.formState.errors.companyName && (
              <span className="error">{step2Form.formState.errors.companyName.message}</span>
            )}
          </div>

          <div className="mt-3">
            <label className='text-sm font-medium text-secondary'>Email ID*</label>
            <input
            className="block w-full min-w-0 text-sm flex-1 pl-1  h-[40px] rounded-md border py-1.5  border-[#d9d9d9]  focus:border-[#555] focus:ring-[#555] focus:outline-none"
              type="email"
              {...step2Form.register('emailId')}
            />
            {step2Form.formState.errors.emailId && (
              <span className="error">{step2Form.formState.errors.emailId.message}</span>
            )}
          </div>

          <div className=" mt-[5px]">
            <label className='text-sm font-medium text-secondary'>When do you need finance?*</label>
            <div className="flex items-center mt-[10px]">
            <div className='flex items-center mr-3 sm:mr-1'>
             
                <input
                  type="radio"
                  value="immediately"
                  {...step2Form.register('financeTimeline')}
                />
                 <label className='cursor-pointer relative pl-1 ml-2 text-base sm:text-sm text-[#022B5C]'>
                Immediately
              </label>
              </div>
              <div className='flex items-center mr-3 sm:mr-1'>

              
                <input
                  type="radio"
                  value="in_2_weeks"
                  {...step2Form.register('financeTimeline')}
                />
                 <label className='cursor-pointer relative pl-1 ml-2 text-base sm:text-sm text-[#022B5C]'> 
                In 2 Weeks
              </label>
              </div>
              </div>
            {step2Form.formState.errors.financeTimeline && (
              <span className="error">{step2Form.formState.errors.financeTimeline.message}</span>
            )}
          </div>

          <div >
   
            <button 
              type="submit" 
              className="mt-4 disabled:bg-[#999] py-1 px-3 rounded-md h-[40px] text-white text-sm w-full bg-gradient-to-r from-[#022B5C] to-[#0363C4] shadow-lg transition-all duration-300 hover:from-[#0363C4] hover:to-[#022B5C]"
            >
              Submit
            </button>
          </div>
        </form>
        </div>
        </>
      )}
      
    </div>
`;

const step1Schema = yup.object().shape({
  financeType: yup.string().required('Please select finance type'),
  financeAmount: yup.string().required('Finance amount is required'),
  phoneNumber: yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
  isOtpVerified: yup.boolean()
    .oneOf([true], 'Please verify your phone number'),
    companyWebsite: yup.string().notRequired().default(''),
});

const step2Schema = yup.object().shape({
  fullName: yup.string().required('Full name is required'),
  companyName: yup.string().required('Company name is required'),
  emailId: yup.string().email('Invalid email').required('Email is required'),
  financeTimeline: yup.string().required('Please select when you need finance'),
});

const FinanceForm = () => {
  const [step, setStep] = useState(1);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendTimer]);

  const step1Form = useForm({
    resolver: yupResolver(step1Schema),
    defaultValues: {
      financeType: '',
      financeAmount: '',
      currency: 'INR',
      phoneNumber: '',
      otp: ['', '', '', '', '', ''],
      isOtpVerified: false,
      companyWebsite: '',
    }
  });

  const step2Form = useForm({
    resolver: yupResolver(step2Schema),
    defaultValues: {
      fullName: '',
      companyName: '',
      emailId: '',
      financeTimeline: '',
    }
  });

  const handleFinanceTypeChange = (type) => {
    step1Form.setValue('financeType', type);
    step1Form.setValue('currency', type === 'domestic' ? 'INR' : 'USD');
  };

  const handleSendOtp = () => {
    const phoneNumber = step1Form.getValues('phoneNumber');
    if (phoneNumber && phoneNumber.length === 10) {
      // Implement OTP sending logic here
      setIsOtpSent(true);
      console.log('Sending OTP...');
    } else {
      step1Form.setError('phoneNumber', {
        type: 'manual',
        message: 'Please enter a valid phone number'
      });
    }
  };

  const handleVerifyOtp = () => {
    const otpValue = step1Form.getValues('otp').join('');
    if (otpValue.length === 6) {
      // Implement OTP verification logic here
      step1Form.setValue('isOtpVerified', true);
    }
  };

  const handleOtpChange = (index, value) => {
    const otp = step1Form.getValues('otp');
    // Only allow numbers
    if (value && !/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    step1Form.setValue('otp', newOtp);

    // Auto focus next input
    if (value && index < 5) {
      const nextInput = document.querySelector(`input[name="otp-${index + 1}"]`);
      if (nextInput) nextInput.focus();
    }

    // If all digits are filled, trigger verification
    if (newOtp.every(digit => digit !== '')) {
      handleVerifyOtp();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !step1Form.getValues('otp')[index] && index > 0) {
      const prevInput = document.querySelector(`input[name="otp-${index - 1}"]`);
      if (prevInput) {
        prevInput.focus();
        e.preventDefault();
      }
    }
  };

  const handleResendOtp = (e) => {
    e.preventDefault();
    handleSendOtp();
    setResendTimer(30);
  };

  const onStep1Submit = (data) => {
    console.log(data)
      setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const onStep2Submit = (data) => {
    const finalData = {
      ...step1Form.getValues(),
      ...data
    };
    console.log('Form submitted:', finalData);
    setShowThankYou(true);
  };

  if (showThankYou) {
    return (
      <div className="w-full pb-[40px] shadow-icon-btn-shadow text-center rounded-[8px] py-4  px-5 sm:px-[16px] lg:w-full lg:max-w-[450px] md:max-w-[350px] sm:w-full md:relative md:m-auto md:mb-5">
        <h2 className='text-green-600 mb-5'>Thank You!</h2>
        <p className='text-gray-600 mb-2'>Your finance request has been submitted successfully.</p>
        <p className='text-gray-600 mb-2'>We will get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className=" w-full pb-[40px] shadow-icon-btn-shadow rounded-[8px] py-4  px-5 sm:px-[16px] lg:w-full lg:max-w-[450px] md:max-w-[350px] sm:w-full md:relative md:m-auto md:mb-5">
     
    
     
      {step === 1 ? (
        <div className='border border-bordercolor rounded-md p-[15px] sm:p-1 '>
     
              <h3 className='text-base mb-3 text-[#2c2c2c]'>Get Upto <span className='font-bold'> 95% Working Capital </span> Of Your Invoice Value <span className='font-bold'> Within 24 Hours </span></h3>

        <form onSubmit={step1Form.handleSubmit(onStep1Submit)} className="">
          <div className="flex items-center mt-[5px]">
            <div className='flex items-center mr-3 sm:mr-1'>

            
              <input
              className='cursor-pointer h-3 w-3'
                type="checkbox"
                checked={step1Form.watch('financeType') === 'domestic'}
                onChange={() => handleFinanceTypeChange('domestic')}
                id="option1"
              />
               <label htmlFor="option1" className='cursor-pointer relative pl-1 ml-2 text-base sm:text-sm text-[#022B5C]'>  Domestic
            </label>
            </div>
              <div className='flex items-center mr-3 sm:mr-1'>

              
              <input
              className='cursor-pointer h-3 w-3'
                type="checkbox"
                checked={step1Form.watch('financeType') === 'export_import'}
                onChange={() => handleFinanceTypeChange('export_import')}
                id="option2"
              />
             <label htmlFor="option2"  className='cursor-pointer relative pl-1 ml-2 text-base sm:text-sm text-[#022B5C]'>  Export & Import
            </label>
            </div>
         
          </div>
          {step1Form.formState.errors.financeType && (
              <span className="error">{step1Form.formState.errors.financeType.message}</span>
            )}
          <div className="mt-3">
            <label className='text-sm font-medium text-secondary'>Finance Required*</label>
            <div className="mt-1 flex rounded-md">
              <select
              className='inline-flex w-[70px] justify-center text-sm items-center h-[40px] rounded-l-md border border-[#d9d9d9]  border-r-0 px-2 text-gray-500 sm:text-sm'
                value={step1Form.watch('currency')}
                disabled
              >
                <option value="INR">INR</option>
                <option value="USD">USD</option>
              </select>
              <input
              className='block w-full min-w-0 text-sm flex-1 pl-1 rounded-none h-[40px] rounded-r-md border py-1.5  border-[#d9d9d9]  focus:border-[#555] focus:ring-[#555] focus:outline-none'
                type="number"
                {...step1Form.register('financeAmount')}
              />
            </div>
            {step1Form.formState.errors.financeAmount && (
              <span className="error">{step1Form.formState.errors.financeAmount.message}</span>
            )}
          </div>

          <div className="mt-3">
            <label className='text-sm font-medium text-secondary'>Phone Number*</label>
            <div className="mt-1 flex rounded-md relative">
              <input
              className='block w-full min-w-0 text-sm flex-1 pl-3 rounded-md h-[40px] rounded-r-md border py-1.5  border-[#d9d9d9] autofill:!bg-white '
                type="tel"
                {...step1Form.register('phoneNumber')}
              />
               {step1Form.watch('isOtpVerified') && (
              <span className="absolute flex items-center top-[5px] right-[90px] sm:right-[85px] z-10 bg-[#E0FDDF] px-2 sm:px-1 text-xs text-[#299E22] h-[30px] rounded-md">
               <svg className="mr-[5px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z" fill="rgba(41,158,34,1)"></path></svg>
                Verified</span>
            )}
              <button 
              className='top-0 bottom-0 absolute right-0 rounded-r-md text-xs text-center px-1 w-[81px] disabled:bg-[#ddd] disabled:text-[#888] disabled:cursor-not-allowed bg-[#e3a200] text-black'
                type="button" 
                onClick={handleSendOtp}
                disabled={step1Form.watch('isOtpVerified')}
              >
                Send OTP
              </button>
            </div>
            {step1Form.formState.errors.phoneNumber && (
              <span className="error">{step1Form.formState.errors.phoneNumber.message}</span>
            )}
            
            {isOtpSent && !step1Form.watch('isOtpVerified') && (
              <div className="mt-3">
                <label className="text-sm font-medium text-secondary">Enter OTP*</label>
                <div className="flex gap-2 mt-1 ">
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <input
                      key={index}
                      name={`otp-${index}`}
                      type="text"
                      maxLength={1}
                      className=" h-[50px] font-semibold text-center text-lg border w-[16.66%] border-[#d9d9d9] rounded-md focus:border-[#555] focus:ring-[#555] focus:outline-none"
                      value={step1Form.watch('otp')[index]}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    />
                  ))}
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <button
                    type="button"
                    className="text-xs font-semibold text-[#022b5c]"
                    onClick={handleResendOtp}
                    disabled={resendTimer > 0}
                  >
                    {resendTimer > 0 ? `Resend OTP in ${resendTimer}s` : 'Resend OTP'}
                  </button>
                </div>
              </div>
            )}
           
            {step1Form.formState.errors.isOtpVerified && (
              <span className="error">{step1Form.formState.errors.isOtpVerified.message}</span>
            )}
          </div>

          <div className="mt-3">
            <label className='text-sm font-medium text-secondary'>Company Website (Optional)</label>
            <input
              className='block w-full min-w-0 text-sm flex-1 pl-3 rounded-md h-[40px] rounded-r-md border py-1.5  border-[#d9d9d9] autofill:!bg-white '
              type="text" 
              {...step1Form.register('companyWebsite')}
            />
        
          </div>

          <button 
            type="submit" 
            className="mt-4 disabled:bg-[#999] py-1 px-3 rounded-md h-[40px] text-white text-sm w-full bg-gradient-to-r from-[#022B5C] to-[#0363C4] shadow-lg transition-all duration-300 hover:from-[#0363C4] hover:to-[#022B5C]"
          >
            Get Financed
          </button>
        </form>
        </div>
      ) : (
        <>
        <button type="button"   onClick={handleBack} className="flex items-center text-sm text-secondary font-medium mb-3"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg></span>Back</button>
      
      
        <div className='border border-bordercolor rounded-md p-[15px] sm:p-1 '>
              
            <form onSubmit={step2Form.handleSubmit(onStep2Submit)} >
          <div className="mt-3">
            <label className='text-sm font-medium text-secondary'>Full Name*</label>
            <input
            className="block w-full min-w-0 text-sm flex-1 pl-1  h-[40px] rounded-md border py-1.5  border-[#d9d9d9]  focus:border-[#555] focus:ring-[#555] focus:outline-none"
              type="text"
              {...step2Form.register('fullName')}
            />
            {step2Form.formState.errors.fullName && (
              <span className="error">{step2Form.formState.errors.fullName.message}</span>
            )}
          </div>

          <div className="mt-3">
            <label className='text-sm font-medium text-secondary'>Company Name*</label>
            <input
            className="block w-full min-w-0 text-sm flex-1 pl-1  h-[40px] rounded-md border py-1.5  border-[#d9d9d9]  focus:border-[#555] focus:ring-[#555] focus:outline-none"
              type="text"
              {...step2Form.register('companyName')}
            />
            {step2Form.formState.errors.companyName && (
              <span className="error">{step2Form.formState.errors.companyName.message}</span>
            )}
          </div>

          <div className="mt-3">
            <label className='text-sm font-medium text-secondary'>Email ID*</label>
            <input
            className="block w-full min-w-0 text-sm flex-1 pl-1  h-[40px] rounded-md border py-1.5  border-[#d9d9d9]  focus:border-[#555] focus:ring-[#555] focus:outline-none"
              type="email"
              {...step2Form.register('emailId')}
            />
            {step2Form.formState.errors.emailId && (
              <span className="error">{step2Form.formState.errors.emailId.message}</span>
            )}
          </div>

          <div className=" mt-[5px]">
            <label className='text-sm font-medium text-secondary'>When do you need finance?*</label>
            <div className="flex items-center mt-[10px]">
            <div className='flex items-center mr-3 sm:mr-1'>
             
                <input
                  type="radio"
                  value="immediately"
                  {...step2Form.register('financeTimeline')}
                />
                 <label className='cursor-pointer relative pl-1 ml-2 text-base sm:text-sm text-[#022B5C]'>
                Immediately
              </label>
              </div>
              <div className='flex items-center mr-3 sm:mr-1'>

              
                <input
                  type="radio"
                  value="in_2_weeks"
                  {...step2Form.register('financeTimeline')}
                />
                 <label className='cursor-pointer relative pl-1 ml-2 text-base sm:text-sm text-[#022B5C]'> 
                In 2 Weeks
              </label>
              </div>
              </div>
            {step2Form.formState.errors.financeTimeline && (
              <span className="error">{step2Form.formState.errors.financeTimeline.message}</span>
            )}
          </div>

          <div >
   
            <button 
              type="submit" 
              className="mt-4 disabled:bg-[#999] py-1 px-3 rounded-md h-[40px] text-white text-sm w-full bg-gradient-to-r from-[#022B5C] to-[#0363C4] shadow-lg transition-all duration-300 hover:from-[#0363C4] hover:to-[#022B5C]"
            >
              Submit
            </button>
          </div>
        </form>
        </div>
        </>
      )}
      
    </div>
  );
};

export default FinanceForm;
