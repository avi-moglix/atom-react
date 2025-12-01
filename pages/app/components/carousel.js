import React from 'react';
import ComponentDoc from '@/components/templates/ComponentDoc';
import { componentsData } from '@/data/componentsData';

export default function CarouselComponent() {
  const data = componentsData.carousel;
  
  return (
    <ComponentDoc
      componentMeta={data}
      propsData={data.propsData}
      // usageCode={data.usageCode}
      // features={data.features}
      variants={data.variants}
      peerDependencies={data.peerDependencies}
      // dosAndDonts={data.dosAndDonts}
      // accessibilityNotes={data.accessibilityNotes}
    />
  );
}
