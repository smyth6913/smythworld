import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/products/$productId')({
  component: () => <div>Not found</div>,
})
