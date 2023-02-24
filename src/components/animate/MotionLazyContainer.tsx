import { LazyMotion } from 'framer-motion';

const loadFeatures = () => import('./features').then((res) => res.default);

type MotionLazyContainerProps = {
  children: React.ReactNode;
};

export default function MotionLazyContainer({ children }: MotionLazyContainerProps) {
  return (
    <LazyMotion strict features={loadFeatures}>
      {children}
    </LazyMotion>
  );
}
