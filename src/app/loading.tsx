import View from '@/motions/View';
import Image from 'next/image';

export default function Loading() {
    return (
        <View
            className="fixed z-50 top-0 left-0 bottom-0 right-0 bg-[#edc58a] flex justify-center items-center"
            transition={{ duration: 1 }}
        >
            <Image
                src={'https://i.pinimg.com/originals/ed/17/0e/ed170ece742e2bc761f0d9742056f430.gif'}
                width={300}
                height={300}
                alt=""
            />
        </View>
    );
}
