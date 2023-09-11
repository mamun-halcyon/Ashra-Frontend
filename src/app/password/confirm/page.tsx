import Button from '@/components/button';
import FormGroup from '@/components/fromgroup';
import './page.scss';

function ConfirmPassword() {
  return (
    <main>
      <section className="flex justify-center items-center forget-page">
        <div className="w-[400px] forget-area p-4 ">
          {/* <h2 className=" font-gotham font-normal text-xl text-black">
            Confirm Password
          </h2> */}
          <form>
            <FormGroup
              title="New password*"
              placeholder="New Password"
              required
            />
            <FormGroup
              className="mt-2 "
              title="Confirm password*"
              placeholder="Confirm password"
              required
            />

            <Button className="w-full py-1 mt-3 font-gotham font-normal text-base forget-button">
              Confirm
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default ConfirmPassword;
