import { motion } from "framer-motion"

function Component() {
  
  return (
    <motion.div
        animate={{ x: [null, 100, 0] }}
        />
  )
}

export default Component