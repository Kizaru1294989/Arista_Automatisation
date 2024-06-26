import MLAG from "../../../../assets/img/mlag.png";
import BGP from "../../../../assets/img/bgp.png";
import EVPN from "../../../../assets/img/evpn.png";

export const labs = [
  { name: "MLAG", image: MLAG, title: "image actuelle : MLAG" },
  { name: "BGP", image: BGP, title: "image actuelle : BGP" },
  {
    name: "VXLAN L2 EVPN",
    image: EVPN,
    title: "image actuelle : VXLAN L2 EVPN",
  },
];

export const renderLabImage = ({ currentLabIndex, labs }) => {
  const currentLab = labs[currentLabIndex];
  return (
    <img
      src={currentLab.image}
      alt={`${currentLab.name} Lab Image`}
      style={{ width: "1500px", height: "620px" }}
    />
  );
};
