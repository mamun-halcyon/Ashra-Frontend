import Button from '@/components/button';
import FormGroup from '@/components/fromgroup';
import './page.scss';

function ResetPassword() {
  return (
    <main>
      <section className="flex justify-center items-center forget-page">
        <div className="w-[400px] forget-area px-4 py-6 ">
          <h2 className=" font-gotham font-normal text-xl text-black">
            Forgot Password?
          </h2>
          <p className="font-gotham font-light text-sm text-black mt-2">
            Enter your email address to recover your password.
          </p>
          <form>
            <FormGroup
              className="mt-2 "
              type="email"
              title="E-Mail*"
              placeholder="Your Email"
              required
            />

            <Button className="w-full py-1 mt-3 font-gotham font-normal text-base forget-button">
              Reset Password
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default ResetPassword;
