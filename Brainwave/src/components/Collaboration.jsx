
import Section from './Section'
import { collabApps, collabContent, collabText } from '../constants'
import { brainwaveSymbol, check } from '../assets'
import Button from './Button'
import {LeftCurve , RightCurve } from './design/Collaboration'

const Collaboration = () => {
  return (
    <Section crosses>
        <div className='container lg:flex'>
            <div className='max-w-[25rem]'>
              <h2 className='h2 mb-4 md:mb-8'> AI Chat App for seamless collaboration </h2>
              <ul className='max-w-[22rem] mb-10 md:mb-14'>
                  {collabContent.map((item) => (
                    <li className='mb-3 py-3' key={item.id}>
                        <div className='flex items-center'>
                          <img src={check} width={24} height={24} alt="CheckMark" />
                          <h6 className='body-2 ml-5'> {item.title} </h6>
                        </div>
                         {item.text && (
                            <p className='body-2 mt-3 text-n-4'>{item.text}</p>
                          )}
                    </li>
                  ))}
              </ul>
              <Button>Try it now</Button>
            </div>

            <div className='lg:ml-auto xl:w-[38rem] mt-4'>
                  <p className='body-2 mb-8 text-n-4 md:mb-16 
                                lg:mb-32 lg:w-[22rem] lg:mx-auto'
                  >{collabText}</p>
                  <div className='mt-4 relative flex border w-[22rem]
                                  left-1/2 aspect-square border-n-6 
                                  rounded-full scale-75 -translate-x-1/2 
                                  md:scale-100'>
                       <div className='flex w-60 border border-n-6 
                                       aspect-square rounded-full m-auto '>
                            <div className='w-[6rem] aspect-square m-auto 
                                            p-[0.2rem] bg-conic-gradient rounded-full'>
                               <div className='flex items-center justify-center w-full h-full bg-n-8 rounded-full'>
                                  <img src={brainwaveSymbol} width={48} height={48}  alt="brainwave" />
                               </div>
                            </div>
                       </div>

                     <ul>
                      {collabApps.map(( app, index ) => (
                          <li key={app.id} className={`absolute top-0 left-1/2 h-1/2
                                                      -ml-[1.6rem] origin-bottom rotate-${index * 45 }`}>
                              <div className={`relative -top-[1.6rem] 
                                               flex w-[3.2rem]  h-[3.2rem] bg-n-7
                                               border border-n-1/15 rounded-xl
                                               -rotate-${index * 45 }`}>
                                <img src={app.icon} alt={app.title}
                                     className='m-auto'
                                     height={app.height}
                                     width={app.width}
                                 />
                              </div>
                          </li>
                      ))}
                     </ul>

                     <LeftCurve/>
                     <RightCurve/>

              </div>
           </div>
        </div>
    </Section>
  )
}

export default Collaboration