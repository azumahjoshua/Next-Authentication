'use client'
import RegistrationForm from "./form";


// interface FormData {
//     name: string;
//     email: string;
//     password: string;
//   }
const RegisterPage: React.FC = () => {
    const handleRegistration = async () => {
    //   console.log(formData);
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <RegistrationForm onSubmit={handleRegistration} />
      </div>
    );
  };
  
  export default RegisterPage;