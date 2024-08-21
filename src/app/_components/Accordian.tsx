import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { accordianData } from "../utils/accordianData"

export function AccordionDemo() {
  return (
    <div>
      <div className=" py-5 lg:py-10  px-4">
        <h1 className=" w-full lg:w-1/2 text-center  mx-auto bg-gradient-to-r from-violet-300 to-orange-400 bg-clip-text text-transparent text-2xl lg:text-4xl font-bold">
          Frequently Asked Questions
        </h1>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full">
          {accordianData.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={item.question}>
              <AccordionTrigger className=" text-[1.2rem] text-start px-4">{item.question}</AccordionTrigger>
              <AccordionContent className=" text-base text-slate-300 px-4 text-start">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
