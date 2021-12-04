import React from "react";
import { debounce } from "../utilities/helpers";
import '../static/css/MainContent.css';

const MainContent = () => {
  return (
    <>
    <h1>Testerton Daily News</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis pretium
      dolor. Sed laoreet lacus vitae velit venenatis euismod. Fusce a libero et
      turpis tempor ornare. Nulla felis nunc, imperdiet finibus erat vitae,
      accumsan consectetur mi. Fusce eget fringilla nisi, eget viverra diam.
      Nulla vulputate ultrices nulla ut vulputate. Mauris sit amet suscipit mi.
      Aliquam in ligula placerat felis ultricies auctor. Cras consequat tortor
      vitae nulla convallis, vel suscipit lacus pulvinar. Fusce porttitor libero
      enim, quis ultrices erat eleifend cursus. Proin a erat aliquam, commodo
      massa sit amet, tincidunt nulla. Nullam accumsan eros sed sagittis
      pulvinar. Aenean sodales tincidunt justo at posuere. Nullam congue ligula
      nec mauris hendrerit mollis. Donec rhoncus tincidunt mi sed bibendum. Sed
      lorem turpis, finibus et pretium ut, accumsan eu ipsum. In hac habitasse
      platea dictumst. Vivamus facilisis accumsan mi aliquam egestas. Vestibulum
      in sollicitudin arcu. Donec eget felis vitae velit fringilla semper ut a
      augue. Sed molestie diam mattis tellus luctus, at tempus odio dictum.
      Curabitur eu hendrerit libero. In tellus libero, ultrices eu metus vitae,
      aliquam tincidunt lorem. In feugiat erat in neque porta, eget dictum odio
      sollicitudin. Aenean et diam tincidunt lacus laoreet euismod gravida id
      ante. Quisque consequat ullamcorper luctus. Suspendisse nunc ipsum,
      malesuada porta ultricies eget, tempor ac tellus. Nullam finibus sem
      neque, id tempus ligula sagittis in. Vestibulum semper eleifend lobortis.
      Fusce porttitor ornare nisl in mollis. Suspendisse ornare augue tincidunt
      pellentesque faucibus. Curabitur vitae eros elit. Maecenas non magna nec
      arcu viverra tempus. Quisque consequat eget nibh eget dictum. Aliquam erat
      volutpat. Suspendisse quis massa justo. Pellentesque molestie eros non
      auctor rutrum. Aliquam consequat neque ante, ut molestie neque congue ut.
      Maecenas cursus vestibulum porttitor. Orci varius natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Sed sodales, nunc a
      pretium commodo, purus sem vestibulum lectus, quis lacinia justo ante non
      lacus. Mauris sem felis, molestie sed aliquam eget, posuere eget neque.
      Etiam at arcu dolor. Vivamus eget orci eleifend, ultrices urna
      consectetur, maximus nunc. Integer vehicula neque sed urna tempus, eu
      vehicula augue porttitor. Nam in ullamcorper dolor. Curabitur non elit
      velit. Fusce blandit quam at ultricies viverra. Sed vulputate massa ipsum,
      id ultricies magna efficitur ac. Aenean egestas ultricies dui, at luctus
      nisi rhoncus a. Nunc elit nisl, semper id elit in, elementum fermentum
      dolor. Vivamus nulla urna, fermentum et libero at, pretium ultricies
      risus. Maecenas commodo ex sem, vitae vulputate eros molestie nec. Aliquam
      blandit dui ac consectetur hendrerit. Ut volutpat odio vel libero egestas,
      vel tincidunt massa porttitor. Aliquam arcu nisi, ultrices vitae tincidunt
      vel, ultricies eget tortor. Sed consequat at tellus quis tristique. Mauris
      lobortis elit tincidunt, commodo dolor quis, fermentum mi. Nulla dui dui,
      dictum eu ex quis, dapibus euismod nunc. Proin vel vestibulum eros. Nulla
      diam magna, vehicula eget diam ut, pellentesque laoreet ex. Mauris cursus
      pharetra ultricies. Suspendisse sit amet ligula et massa porttitor
      posuere. Fusce at consectetur lectus, vitae dapibus mauris. Fusce dolor
      purus, mollis sed posuere id, porttitor eget metus. Quisque vitae
      porttitor dui. Nam lobortis consequat accumsan. Aenean quis lacus egestas,
      mollis ipsum eu, ultrices metus. Aliquam sit amet quam ipsum. Donec sed
      augue turpis. Curabitur tempus, tortor eu tristique imperdiet, felis
      ligula gravida mi, at bibendum augue sapien sit amet lectus. Curabitur
      velit dolor, fringilla vitae dolor ac, ornare pulvinar lorem. Maecenas
      congue ac erat in elementum. In hac habitasse platea dictumst. Praesent
      eleifend sapien quis dolor faucibus, eget lacinia lectus porttitor. Donec
      sit amet imperdiet nisi. Integer bibendum sem vitae tortor ultrices
      vehicula. Aenean a commodo risus. Aenean vel nunc sit amet enim
      condimentum aliquam sit amet in quam. Phasellus felis nibh, congue non
      tincidunt vitae, euismod sed ipsum. Nulla facilisi. Nam pharetra posuere
      metus in malesuada. Morbi metus odio, efficitur et elementum eget, varius
      nec massa. Morbi ex augue, fringilla at molestie id, malesuada vel leo.
      Vestibulum sed augue tempus, lobortis nunc ac, rhoncus est. Donec eget
      maximus magna. Mauris vulputate quam eget mi placerat, at luctus arcu
      laoreet. Duis dolor mi, sagittis quis justo quis, elementum hendrerit
      libero. Pellentesque non feugiat nisl, at viverra urna. Duis in ultricies
      lacus. Integer venenatis luctus felis in condimentum. In in dolor
      ullamcorper, lobortis mauris eget, consequat felis. Vestibulum euismod
      tellus et aliquam ultricies. Maecenas consectetur elit a suscipit
      interdum. Donec efficitur, est eu scelerisque sodales, est ante
      pellentesque nisl, quis euismod nisi massa vitae felis. Suspendisse
      lobortis tellus nisl, ut ultrices sem fringilla nec. Sed consequat dolor
      in mi semper consequat. Praesent ut malesuada ligula, at condimentum
      metus. Aliquam vitae magna pretium, imperdiet nisi id, eleifend nulla.
      Vivamus imperdiet varius dapibus. Nullam dictum nulla vitae justo
      pharetra, at condimentum ligula mollis. Curabitur dolor arcu, pulvinar nec
      fringilla quis, pretium in orci. Ut congue, sem eget auctor scelerisque,
      sapien urna tempor dui, eget imperdiet nibh ante sit amet lorem. Sed ac
      lorem ullamcorper, lobortis nisl a, laoreet ligula. Ut in nisi ut est
      fringilla pretium et eget sapien. Etiam vel tellus eleifend, euismod
      libero in, elementum massa. Praesent convallis quam eu arcu aliquet, in
      maximus nulla ullamcorper. Praesent ut nibh aliquam, scelerisque diam non,
      blandit ipsum. Praesent ac odio ipsum. Pellentesque habitant morbi
      tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus
      tempus lorem nec sapien rutrum, et laoreet quam mattis. Praesent
      condimentum dapibus volutpat. Donec vestibulum nibh tortor, quis malesuada
      tellus eleifend non. Ut tristique consectetur sapien quis euismod. Nullam
      dapibus tempus consectetur. Fusce molestie eu ante nec scelerisque.
      Vivamus sed pretium tellus. Ut porttitor, nibh in tincidunt ullamcorper,
      risus mauris pulvinar massa, ac feugiat neque risus euismod mauris. Fusce
      elit quam, rutrum et erat quis, placerat porttitor orci. Mauris lacinia
      ullamcorper ullamcorper. Ut vehicula, risus sit amet tincidunt rutrum,
      lectus tortor condimentum velit, imperdiet vehicula ligula magna
      ullamcorper nunc. Pellentesque dapibus neque nec augue dictum fringilla.
      Donec in commodo ante. Proin vulputate laoreet justo, ac gravida velit
      tincidunt vitae. Aliquam at velit blandit, elementum erat a, semper ante.
      Sed eu tellus in ex gravida lacinia vitae nec arcu. Sed interdum metus et
      ipsum volutpat ultricies. Fusce quis dapibus sapien. Morbi sed quam
      commodo lectus consequat placerat eu scelerisque turpis. Nulla facilisi.
      Aliquam erat volutpat. Nulla facilisi. Integer consequat, velit et
      bibendum elementum, sapien augue rhoncus sem, aliquet volutpat ligula
      metus a dolor. Sed convallis volutpat justo quis pretium. Pellentesque
      sollicitudin sapien nibh, quis hendrerit nibh auctor et. Praesent sed
      vehicula enim. Donec eget tortor sed augue cursus semper. Ut ac massa
      laoreet, mattis odio a, consequat felis. Nullam eu venenatis nulla, non
      ornare enim. Pellentesque et eleifend nisl, sit amet dapibus orci. Integer
      venenatis volutpat quam, in blandit risus malesuada at. Nullam vestibulum
      ipsum non condimentum placerat. Maecenas imperdiet placerat lorem, a
      malesuada lacus facilisis id. Nunc faucibus finibus consectetur. Aenean et
      sollicitudin mi, eu aliquet diam. Pellentesque ultrices magna leo. Donec
      vel ipsum sed nisl tristique hendrerit a ut erat. Pellentesque posuere ex
      vel sodales faucibus. Praesent a risus sapien. Maecenas pulvinar placerat
      nunc, vitae pellentesque enim. Nulla id elit ac tortor rhoncus tristique
      at quis enim. Interdum et malesuada fames ac ante ipsum primis in
      faucibus. Vestibulum eu nibh vel arcu convallis vulputate in vitae enim.
      Ut posuere, ante id imperdiet convallis, nibh est tincidunt urna, eu
      finibus augue tellus a ante. Etiam rutrum massa a diam pulvinar semper.
      Cras tristique, nunc id elementum efficitur, metus lacus finibus leo, eu
      tempor mi nisl eu risus. Aenean placerat fermentum odio, vel tincidunt
      diam placerat in. Pellentesque in ipsum non turpis faucibus pharetra sed
      ut ante. Sed facilisis diam eget maximus tincidunt. Maecenas id luctus
      lorem. Phasellus faucibus aliquam orci, vel feugiat dolor. Interdum et
      malesuada fames ac ante ipsum primis in faucibus. Integer interdum diam
      non facilisis tristique. Mauris vehicula erat tempus purus sagittis
      pulvinar. Aenean laoreet mattis orci id dapibus. Vestibulum ligula augue,
      ullamcorper eget vehicula a, feugiat mattis ipsum. Nunc pulvinar, nisi id
      egestas commodo, ex ex euismod est, viverra venenatis nunc odio et purus.
      Curabitur interdum ultrices interdum. Vestibulum molestie ante nec elit
      pellentesque, vitae consectetur tellus fringilla. Sed dignissim mollis
      urna. Nunc eu nunc hendrerit, ornare leo vitae, ullamcorper arcu. Sed
      sodales nisi quis leo porta, a pretium dolor sollicitudin. Vestibulum
      fermentum pretium malesuada. Pellentesque sed sapien orci. Curabitur ante
      metus, ornare vitae magna nec, sagittis iaculis urna. Phasellus eu massa a
      neque fringilla dapibus sed quis leo. In dapibus tellus sem, et lacinia
      dolor suscipit sed. In in porttitor dolor. Integer turpis nunc, tempor nec
      sapien sed, rutrum lacinia nunc. Duis ac luctus urna. Etiam vel metus leo.
      Aliquam eget magna nec lectus sollicitudin blandit nec et justo. Nulla
      facilisi. Vestibulum vitae metus vitae massa accumsan ornare. Maecenas vel
      magna sed neque suscipit cursus nec egestas leo. Vestibulum non hendrerit
      purus. Praesent a sollicitudin felis. Proin lobortis arcu vel libero
      pharetra, at pharetra turpis efficitur. Cras id ligula a est egestas
      congue. Aenean vitae lobortis augue. Sed eget tempor magna. Etiam quis
      metus vitae ligula semper facilisis at quis leo. Vestibulum ante ipsum
      primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean a
      euismod velit. Sed euismod turpis id turpis sagittis consectetur. Class
      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos. Donec at luctus nulla. Vivamus aliquam lacus libero, eu laoreet
      nulla lobortis vel. Praesent non sodales lacus, sit amet dignissim ligula.
      Etiam ac lacinia risus. Quisque sed lobortis massa, at blandit velit.
      Suspendisse a ante quis leo vulputate ultrices. Quisque consequat ut
      sapien vel gravida. Vivamus vitae purus massa. Donec tincidunt placerat
      nibh, ornare aliquet arcu feugiat non. Mauris gravida arcu vitae
      ullamcorper finibus. Pellentesque neque lacus, cursus vitae quam at,
      vulputate pharetra magna. Suspendisse quis sapien ut tellus volutpat
      tincidunt et eget nisl. Suspendisse aliquam turpis non feugiat iaculis.
      Nam sit amet tincidunt urna. Nunc fringilla sodales urna eu accumsan.
      Aliquam sollicitudin arcu et feugiat imperdiet. Mauris et urna tellus.
      Praesent efficitur odio leo, ut volutpat orci vulputate eget. Praesent
      ultricies lacinia aliquet. Etiam risus ex, mattis quis vehicula eu,
      lobortis id turpis. Nam porta diam id aliquam accumsan. Ut pretium dictum
      mi a mollis. Mauris pharetra risus justo, eget egestas purus aliquam a.
      Proin sed ex eu lectus ultrices cursus. Curabitur quis sem sodales,
      consectetur tellus vitae, maximus velit. Proin eu risus nibh. Donec vitae
      commodo lectus. Praesent placerat massa at risus sagittis fringilla ac sit
      amet mauris. Morbi in lacus et tellus auctor venenatis ut sit amet nisi.
      Aliquam congue nisi non mattis ultrices. Aliquam suscipit vitae nisl non
      rutrum. Class aptent taciti sociosqu ad litora torquent per conubia
      nostra, per inceptos himenaeos. Donec at enim sed nisi luctus mollis
      vehicula at leo. Ut cursus erat orci, eget consequat diam malesuada a.
      Aenean quis felis vitae eros sagittis facilisis. Integer volutpat
      scelerisque odio, vel tincidunt est pretium sed. Praesent sed nisl nisl.
      Nulla iaculis quis ipsum ac tristique. Quisque efficitur urna ut dolor
      viverra, vitae tempus lacus aliquam. Vestibulum faucibus a velit id
      accumsan. Integer euismod tellus sem, id auctor orci vulputate ut. Integer
      ut elit quis lorem dictum pellentesque. Praesent aliquam tellus ac velit
      dignissim venenatis.
      </p>
    </>
  );
};

export default MainContent;
