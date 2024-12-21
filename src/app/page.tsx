import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Test from '@/features/Test';

export default function Home() {
  return (
    <div>
      <Test />
      <Button size="lg">Hello</Button>
      <Button variant="destructive">Hello</Button>
      <Button variant="ghost">Hello</Button>
      <Button variant="link">Hello</Button>
      <Button variant="muted">Hello</Button>
      <Button variant="teritory">Hello</Button>
      <Input />
    </div>
  );
}
