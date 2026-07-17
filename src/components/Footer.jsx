import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const controls = useAnimation();

  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    let mounted = true;

    const runDownload = async () => {
      while (mounted) {
        // Reset progress
        setCompleted(false);

        await controls.start({
          scaleX: 1,
          transition: {
            duration: 3,
            ease: 'easeInOut',
          },
        });

        // Show completed state
        if (mounted) {
          setCompleted(true);
        }

        // Wait before restarting
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Reset line
        await controls.start({
          scaleX: 0,
          transition: {
            duration: 0.3,
            ease: 'easeOut',
          },
        });
      }
    };

    runDownload();

    return () => {
      mounted = false;
    };
  }, [controls]);

  return (
    <footer className="relative py-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="flex justify-center">
          <div className="relative text-center">
            <motion.span className="relative text-[11px] text-gold tracking-widest cursor-default">
              &copy; {currentYear} Hideyuki Takahashi
              {/* Download progress bar */}
              <motion.span
                className="
                  absolute
                  left-0
                  -bottom-1
                  h-px
                  w-full
                  bg-gold
                  origin-left
                "
                initial={{
                  scaleX: 0,
                }}
                animate={controls}
              />
            </motion.span>

            {/* Completed message */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: completed ? 1 : 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                mt-3
                text-[10px]
                tracking-[0.3em]
                uppercase
                text-gold/60
              "
            >
              build success ✓
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}
