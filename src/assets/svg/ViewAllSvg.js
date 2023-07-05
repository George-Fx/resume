import * as React from 'react';
import Svg, {Path, G, Defs, ClipPath} from 'react-native-svg';

const ViewAllSvg = () => {
  return (
    <Svg width={70} height={27} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <Path
        d='m4.142 19-3.008-7.936h1.408l2.384 6.64 2.4-6.64h1.376L5.694 19H4.142Zm6.872-9.696a.943.943 0 0 1-.672-.256.943.943 0 0 1-.256-.672c0-.256.085-.47.256-.64a.943.943 0 0 1 .672-.256c.256 0 .474.085.656.256.181.17.272.384.272.64 0 .267-.09.49-.272.672a.923.923 0 0 1-.656.256ZM10.342 19v-7.936h1.344V19h-1.344Zm7.252.192c-.758 0-1.43-.17-2.016-.512a3.807 3.807 0 0 1-1.392-1.456c-.33-.619-.496-1.35-.496-2.192 0-.832.165-1.557.496-2.176.33-.63.79-1.115 1.376-1.456.597-.352 1.285-.528 2.064-.528.768 0 1.43.176 1.984.528a3.45 3.45 0 0 1 1.296 1.36 3.847 3.847 0 0 1 .432 2.176v.4h-6.32c.032.608.17 1.115.416 1.52.256.395.57.693.944.896.384.203.79.304 1.216.304.554 0 1.018-.128 1.392-.384.373-.256.645-.603.816-1.04h1.328a3.607 3.607 0 0 1-1.232 1.84c-.598.48-1.366.72-2.304.72Zm0-7.184c-.64 0-1.21.197-1.712.592-.49.384-.774.95-.848 1.696h4.992c-.032-.715-.277-1.275-.736-1.68-.459-.405-1.024-.608-1.696-.608ZM24.423 19l-2.32-7.936h1.344l1.68 6.224 1.856-6.224h1.52l1.872 6.224 1.664-6.224h1.36L31.079 19h-1.376l-1.952-6.544L25.799 19h-1.376Zm21.571.192c-.661 0-1.21-.112-1.648-.336-.437-.224-.763-.523-.976-.896a2.41 2.41 0 0 1-.32-1.216c0-.81.31-1.435.928-1.872.619-.437 1.461-.656 2.528-.656h2.144v-.096c0-.693-.181-1.216-.544-1.568-.363-.363-.848-.544-1.456-.544-.523 0-.976.133-1.36.4-.373.256-.608.635-.704 1.136H43.21c.053-.576.245-1.061.576-1.456a3.258 3.258 0 0 1 1.264-.896 4.044 4.044 0 0 1 1.6-.32c1.11 0 1.941.299 2.496.896.565.587.848 1.37.848 2.352V19h-1.2l-.08-1.424a3.187 3.187 0 0 1-.992 1.152c-.427.31-1.003.464-1.728.464Zm.208-1.136c.512 0 .95-.133 1.312-.4a2.53 2.53 0 0 0 .848-1.04 3.24 3.24 0 0 0 .288-1.344v-.016h-2.032c-.79 0-1.35.139-1.68.416-.32.267-.48.603-.48 1.008 0 .416.15.752.448 1.008.31.245.741.368 1.296.368ZM52.01 19V7.48h1.344V19H52.01Zm3.547 0V7.48h1.344V19h-1.344Z'
        fill='#142535'
      />
      <G clipPath='url(#a)'>
        <Path
          d='m65 18 4-4-4-4'
          stroke='#142535'
          strokeWidth={1.2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' transform='translate(64 9)' d='M0 0h6v10H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ViewAllSvg;
