import Box from "../ui/Box";
import Button from "../ui/Button";
import Logo from "../ui/Logo";

export default function LandingPage() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <Box>
        <Logo />
        <div className="flex flex-col items-stretch gap-2">
          <Button>Browse goblins</Button>
          <Button>Find nearest goblin</Button>
        </div>
      </Box>
    </div>
  );
}
