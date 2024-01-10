import Button from "@/components/button";
import FormGroup from "@/components/fromgroup";
import "./page.scss";

function ConfirmPassword() {
  return (
    <main>
      <section className="flex justify-center items-center forget-page">
        <div className="w-[400px] forget-area p-4 ">
          <form>
            <FormGroup
              title="New Password*"
              placeholder="New Password"
              required
            />
            <FormGroup
              className="mt-2 "
              title="Confirm Password*"
              placeholder="Confirm password"
              required
            />

            <Button className="w-full py-1 mt-3 font-gotham font-normal text-sm forget-button">
              Confirm
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default ConfirmPassword;
