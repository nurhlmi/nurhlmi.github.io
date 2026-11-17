import { Card, Heading, Stack } from "@chakra-ui/react";
import type { ReactNode } from "react";

/** The Home card pattern (rounded card, muted heading) as a reusable section wrapper. */
export default function SectionCard(props: {
  title: string;
  id?: string;
  as?: "h1" | "h2";
  action?: ReactNode;
  children: ReactNode;
}) {
  const { title, id, as = "h2", action, children } = props;
  return (
    <Card.Root id={id} as="section" scrollMarginTop="24px" rounded="2xl" animation="slide, fade-in" animationDuration="1s">
      <Card.Body gap={4}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Heading as={as} size="xl" color="gray.500">{title}</Heading>
          {action}
        </Stack>
        {children}
      </Card.Body>
    </Card.Root>
  );
}
