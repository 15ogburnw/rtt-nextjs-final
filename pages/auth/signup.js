import SignupForm1 from "@/components/Forms/SignupForm1";
import SignupForm2 from "@/components/Forms/SignupForm2";
import Auth from "@/layouts/Auth";

export default function SignupPage() {
  return (
    <div className="mb-6">
      <div className="flex w-full max-w-md md:max-w-lg mx-auto my-32 min-h-fit  overflow-auto bg-white rounded-lg shadow-lg shadow-primary-600  lg:max-w-xl ">
        <div className="px-6 flex justify-center items-center mb-10 flex-col py-8 md:px-8 w-full">
          <SignupForm1 />
        </div>
      </div>
    </div>
  );
}

SignupPage.layout = Auth;
