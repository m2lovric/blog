import Link from 'next/link';

export default function Home() {
  return (
    <section className=' h-1/2 px-[500px] py-20 bg-emerald-400 flex justify-between'>
      <h2 className=' text-white w-1/2 font-bold text-5xl'>
        Placeholder text - some title
      </h2>
      <p className=' w-1/2 font-light bg-gradient-to-b from-transparent to-emerald-400'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit,
        felis faucibus aliquam congue, leo nisi sodales sapien, non congue leo
        elit ac dui. Curabitur sollicitudin leo venenatis, viverra ligula vitae,
        convallis augue. Nullam sit amet augue tincidunt, elementum nisi id,
        tincidunt mi. Suspendisse potenti. Vivamus et est mi. Donec et nunc
        eleifend, tempor nulla in, egestas tortor. Aliquam fermentum finibus
        condimentum. Fusce metus lectus, porta et ipsum ac, mattis varius sem.
        Fusce sit amet efficitur justo. Sed nec lobortis leo, vel efficitur
        ante. Quisque ultrices, eros in consequat molestie, lacus tellus ornare
        turpis, feugiat varius magna lectus et lectus. Mauris sit amet erat
        arcu. Mauris mollis, nulla eu vulputate pulvinar, massa ex feugiat
        nulla, vitae mattis nisl ligula ac mauris. Quisque finibus at risus eu
        ornare.
      </p>
    </section>
  );
}
