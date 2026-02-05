import React from 'react'
import "./value.css"
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion'
// import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md'
import data from '../../utils/accordion'
import { useState } from 'react'
const Value = () => {
    return (
        <section className='v-wrapper'>
            <div className='v-container innerWidth flexCenter paddings'>
                <div className='v-left'>
                    <div className='image-container'>
                        <img src="./value.png" alt="" />
                    </div>
                </div>

                <div className='v-right flexColStart'>
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We Give To You</span>
                    <span className='secondaryText'>We always ready to help by providing the best services for you.<br />We believe a good place to live can make your life better.</span>
                    <Accordion className='accordion' allowMultipleExpanded={false}  allowZeroExpanded={true}>
                        {data.map((item, index) => {
                            const [className, setClassName] = useState(null);
                            return (<AccordionItem className={`accordionItem ${className}`} key={index} uuid={index}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>

                                        <AccordionItemState>
                                            {({ expanded }) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                                        </AccordionItemState>
                                        <div style={{ color: "var(--blue)" }} className='flexCenter'>{item.icon}</div>
                                        <span className='primaryText'>{item.heading}</span>
                                        <div className='flexCenter icon'>
                                            <MdOutlineArrowDropDown size={20} />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className='secondaryText'>{item.detail}</p>

                                </AccordionItemPanel>
                            </AccordionItem>)
                        })}
                    </Accordion>
                </div>



            </div>
        </section>
    )
}

export default Value
