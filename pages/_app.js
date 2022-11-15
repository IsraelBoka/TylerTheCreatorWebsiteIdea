import '../styles/globals.css'
import { AnimatePresence,LazyMotion,m  } from 'framer-motion'
import { domAnimation } from 'framer-motion'
function MyApp({ Component, pageProps, router }) {
  return (
    <LazyMotion  features={domAnimation}> 
            <AnimatePresence exitBeforeEnter >
              <m.div
      initial="initial"
      animate="animate"
      exit="exit"
     key={router.route}
     transition={{duration:0.7}}
     variants={{
      initial: {
        rotateY: 90
      },
      animate: {
        rotateY: 0
      },
      exit: {
        rotateY: 90
      }
    ,
    transition: {
      duration: 0.7
    }
  }}
>
            <Component {...pageProps} />
          </m.div>
          </AnimatePresence>
    </LazyMotion>
  )
}

export default MyApp
