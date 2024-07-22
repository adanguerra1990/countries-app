import { RiLoader4Fill } from '@remixicon/react';


const Loading = () => (
     <div className="flex items-center justify-center h-screen">
          <RiLoader4Fill
               className="text-6xl text-neutral-darkBlue dark:text-neutral-white animate-spin "
               size={75}
          />
     </div>
)


export default Loading;
