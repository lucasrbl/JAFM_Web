import Logo from '../LogIn/components/Logo/Logo';
import LogIn from '../LogIn/LogIn';


const Template = () => {
  return (
        <div className="
        flex
        w-full
        h-screen
        relative
        overflow-hidden
        z-10
        
        bg-working-man
        bg-cover
        bg-no-repeat  
        before:content-['']
        before:absolute
        before:inset-0
        before:block
        before:bg-gradient-to-t
        before:to-[#000000]/[.80]
        before:from-[#06000EB8]/[.65]
        before:z-[-5]">

        <Logo/>
        <LogIn/>
        </div>
  );
};

export default Template;