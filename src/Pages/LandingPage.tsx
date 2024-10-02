import Box from "../ui/Box";
import Button from "../ui/Button";
import Logo from "../ui/Logo";

export default function LandingPage() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <Box>
        <Logo type="large" className="mb-12 hidden md:block" />
        <Logo className="md:hidden" />
        <div className="flex flex-col items-stretch gap-4 md:px-10">
          <Button to="app">Browse goblins</Button>
          <Button>Find nearest goblin</Button>
        </div>
      </Box>
    </div>
  );
}
