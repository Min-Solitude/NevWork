import ButtonTheme from '@/components/shared/ButtonTheme';
import Account from '../Account';
import ZoomFullScreen from '../ZoomFullScreen';
import Notice from '../Notice';
import { Header } from '@/store/reducers/mode/mode.type';
import Button from '@/components/customs/Button';
import IonIcon from '@reacticons/ionicons';

type NavLinkProps = {
    header: Header;
    btnHide?: () => void;
};

export default function NavLink({ header, btnHide }: NavLinkProps) {
    return (
        <div className={`flex gap-2 duration-150  items-center ${header?.layout ? 'md:gap-2 ' : 'md:gap-4 '}`}>
            {header?.layout && (
                <div className="flex justify-center items-center min-w-[2rem]">
                    <Button kind="square" className="bg-transparent" onClick={btnHide}>
                        <IonIcon name="caret-up" className="text-2xl" />
                    </Button>
                </div>
            )}
            {header?.btnNotice && <Notice header={header} />}
            {header?.btnFullScreen && <ZoomFullScreen header={header} />}
            {header?.btnDarkMode && (
                <div className="flex justify-center items-center min-w-[2rem]">
                    <ButtonTheme header={header} />
                </div>
            )}
            {header?.profile && <Account />}
        </div>
    );
}
