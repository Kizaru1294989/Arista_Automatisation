import { useState } from "react";
import { initialTabs as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";

export default function LabSelection() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="window">
      <nav>
        <ul>
          {tabs.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {/* <img src={item.image} alt={item.label} />  */}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h4
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "5px",
              }}
            >
              {selectedTab.label}
            </h4>
            <img
              src={selectedTab.image}
              style={{
                width: "1000px",
                height: "600px",
                marginBottom: "-50px",
              }}
              alt={selectedTab.label}
            />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
