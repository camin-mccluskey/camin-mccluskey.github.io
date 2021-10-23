import { useTrail } from "@react-spring/web";


export default function useDefaultTrail(items, delay=0) {
  return useTrail(items.length, {
    config: { mass: 10, tension: 1500, friction: 400 },
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: delay,
  });
}
