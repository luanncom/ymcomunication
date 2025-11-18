import Link from "next/link";
import Logo from "@/components/logo";

export default async function Page() {
  return (
    <div className="flex flex-auto flex-col font-medium gap-6">
      <div className="bg-green-600 text-white">
        <div className="mx-auto px-4 sm:px-6 py-4 space-y-4 font-medium">
          <div className="text-sm text-center font-semibold">
            Your purchase has been completed successfully!
          </div>
        </div>
      </div>
      <div className="max-w-xl mx-auto p-4 space-y-2 font-medium">
        <div className="flex flex-col text-base rounded-2xl gap-5 bg-gradient-to-t appear px-4 py-6 from-gray-50 to-gray-100">
          <span className="text-2xl font-semibold text-center">🎁 Welcome! 🎁</span>
          <p>Your access has already been released!</p>
          <p>The next step is to <u>access the inbox</u> of your email used for the purchase.</p>
          <p>You will receive an email with the title: <br /><strong>“Your access has been released“</strong>.</p>
          <p>Don&apos;t forget to check your spam or junk folder, some emails may end up there by error.</p>
          <p>If you have any questions or difficulties accessing, <u>send an email to our support</u>:</p>
          <p> - <strong className="text-green-500 hover:underline"><Link href="mailto:ayuda@ayudarewards.com">ayuda@ayudarewards.com</Link></strong></p>
          <p>We will respond immediately and help you with everything you need.</p>
          <p>A strong hug, see you on the platform to start studying!</p>
          <div className="flex flex-col gap-4 rounded-2xl border-2 border-dashed text-sm text-center mt-4 p-6 bg-green-50 border-green-500">
            <p>If you want to access your members area directly, click the link below.</p>
            <p>Pero no olvide revisar la bandeja de entrada de su correo electrónico para <u>encontrar su correo electrónico y contraseña</u>.</p>
            <Link href="https://you-rewards.memberkit.com.br/" className="bg-green-200 text-green-900 text-sm text-center font-extrabold rounded-lg mt-3 p-3 hover:underline">
              ✅ Click here to access the members area now!
            </Link>
          </div>
        </div>

        <div className="flex justify-center !my-10">
          <Logo />
        </div>

      </div>
    </div>  
  );

};