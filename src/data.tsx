export type NavType = "scroll" | "link" | "route";

export interface NavTab {
  name: string;
  id: string;
  type: NavType;
}

export const navTabs: NavTab[] = [
  { name: "Home", id: "/", type: "route" },
  { name: "Tentang Kami", id: "/tentang-kami", type: "route" },
  {
    name: "Pendaftaran siswa baru",
    id: "/pendaftaran siswa baru",
    type: "route",
  },
  { name: "Kegiatan", id: "/kegiatan", type: "route" },
  { name: "Prestasi", id: "/Prestasi", type: "route" },
  { name: "Lagu Mars", id: "/Lagu Mars", type: "route" },
];
