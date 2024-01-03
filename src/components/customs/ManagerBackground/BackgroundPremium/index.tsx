import { IMAGES } from '@/assets';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { ModeAction } from '@/store/reducers/mode/mode.reducer';
import Button from '../../Button';
import Card from '../../Card';
import { useState } from 'react';
import IonIcon from '@reacticons/ionicons';
import { screenVideoVip, screenVip } from '@/data/screenVip';
import Payment from '@/components/shared/Payment';
import { Background } from '@/store/reducers/mode/mode.type';

type BackgroundPremiumProps = {
    kindScreen: boolean;
    background: any;
};

export default function BackgroundPremium({ kindScreen, background }: BackgroundPremiumProps) {
    const [isDontShow, setIsDontShow] = useState(false);

    const dispatch = useAppDispatch();

    const isUser = useAppSelector((state) => state.auth.account);

    const isTheme = useAppSelector((state) => state.mode.theme);
    const isNameScreen = useAppSelector((state) => state.mode.nameScreen);

    return (
        <div className="flex gap-4 items-center hidden-scrollbar overflow-x-scroll w-[80vw] lg:overscroll-x-none lg:grid lg:grid-cols-4 lg:w-full 2xl:grid-cols-5">
            {isDontShow && <Payment close={() => setIsDontShow(false)} />}
            {
                kindScreen
                    ? screenVideoVip.map((item, index) => (
                          <Button
                              key={index}
                              onClick={() => {
                                  if (isUser?.vip?.isVip) {
                                      dispatch(ModeAction.setNameScreen({ name: item.name }));
                                  } else {
                                      setIsDontShow(true);
                                  }
                              }}
                              className="relative"
                          >
                              {isUser?.vip?.isVip ? null : (
                                  <div className="absolute top-0 left-0 w-full rounded-xl flex justify-center items-center h-full z-10 bg-bg-black-90">
                                      <div className="flex flex-col gap-2 items-center">
                                          <IonIcon name="diamond" className="font-extrabold text-4xl text-primary" />
                                      </div>
                                  </div>
                              )}
                              <Card
                                  image={isTheme === 'day' ? item.videoDay : item.videoNight}
                                  className={`border-2 ${
                                      isNameScreen === item.name ? 'border-cl-yellow' : 'border-transparent'
                                  }`}
                              />
                          </Button>
                      ))
                    : background.map(
                          (item: Background, index: number) =>
                              item.type === 'vip' && (
                                  <Button
                                      key={index}
                                      onClick={() => {
                                          if (isUser?.vip?.isVip) {
                                              dispatch(ModeAction.setNameScreen({ name: item.name }));
                                          } else {
                                              setIsDontShow(true);
                                          }
                                      }}
                                      className="relative"
                                  >
                                      {isUser?.vip?.isVip ? null : (
                                          <div className="absolute top-0 left-0 w-full rounded-xl flex justify-center items-center h-full z-10 bg-bg-black-90">
                                              <div className="flex flex-col gap-2 items-center">
                                                  <IonIcon
                                                      name="diamond"
                                                      className="font-extrabold text-4xl text-primary"
                                                  />
                                              </div>
                                          </div>
                                      )}
                                      <Card
                                          image={isTheme === 'day' ? item.backgroundDay : item.backgroundNight}
                                          className={`border-2 ${
                                              isNameScreen === item.name ? 'border-cl-yellow' : 'border-transparent'
                                          }`}
                                      />
                                  </Button>
                              ),
                      )

                // screenVip.map((item, index) => (
                //   <Button
                //       key={index}
                //       onClick={() => {
                //           if (isUser?.vip?.isVip) {
                //               dispatch(ModeAction.setNameScreen({ name: item.name, kind: item.kind }));
                //           } else {
                //               setIsDontShow(true);
                //           }
                //       }}
                //       className="relative"
                //   >
                //       {isUser?.vip?.isVip ? null : (
                //           <div className="absolute top-0 left-0 w-full rounded-xl flex justify-center items-center h-full z-10 bg-bg-black-90">
                //               <div className="flex flex-col gap-2 items-center">
                //                   <IonIcon name="diamond" className="font-extrabold text-4xl text-primary" />
                //               </div>
                //           </div>
                //       )}
                //       <Card
                //           image={isTheme === 'day' ? item.imgDay : item.imgNight}
                //           className={`border-2 ${
                //               isNameScreen === item.name ? 'border-cl-yellow' : 'border-transparent'
                //           }`}
                //       />
                //   </Button>
                //   ))
            }
        </div>
    );
}
