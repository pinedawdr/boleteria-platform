// user-platform/src/app/auth/login/page.tsx
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import AuthForm from '@/components/forms/AuthForms';

export default function Login() {
  return (
    <main>
      <NavBar />
      <div className="min-h-[calc(100vh-64px-200px)] bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <AuthForm type="login" />
        </div>
      </div>
      <Footer />
    </main>
  );
}