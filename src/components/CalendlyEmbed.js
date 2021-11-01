import { PopupWidget } from "react-calendly";


const CalendlyEmbed = ({ darkMode }) => {
  return (
    <PopupWidget 
          text="Book a Meeting"
          url='https://calendly.com/camin-mccluskey/15min'
          className="darkTrans"
          color={darkMode ? "white" : "black"}
          textColor={darkMode ? "black" : "white"}
    />
  )
}

export default CalendlyEmbed;
