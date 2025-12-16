import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { ArrowLeft } from "lucide-react";
import { slides } from "../../data";
import { useEffect, useState } from "react";
import { getRequest } from "../../utils/api-call";

export interface Penulis {
	user_id: string;
	username: string;
	email: string;
	password_hash: string;
	nama_lengkap: string;
	role_id: number;
	jabatan?: string | null;
	created_at: string;
	updated_at: string;
	login_terakhir?: string | null;
}

export interface Data {
	carousel_id: string;
	judul: string;
	urutan: number;
	konten: string;
	path_gambar: string;
	tanggal_publikasi: string;
	is_published: boolean;
	is_featured: boolean;
	created_at: string;
	updated_at: string;
	jenjang_id?: string | null;
	penulis_user_id: string;
	editor_user_id?: string | null;
	jenjang?: string | null;
	penulis: Penulis;
	editor?: string | null;
}

export interface CarouselsResponse {
	message: string;
	data: Data;
}

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Carousel_detail_home = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [data, setData] = useState<CarouselsResponse["data"] | null>(null);

	const carouselData = slides.find((slide) => slide.id === Number(id));
	useEffect(() => {
		const getData = async () => {
			try {
				const response = await getRequest(`carousels/${id}`);
				setData(response.data);
				console.log(response);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, []);

	if (!data) {
		return (
			<>
				<Navbar />
				<section className='min-h-screen bg-[#f7f7f7] flex items-center justify-center px-4'>
					<div className='text-center space-y-4'>
						<h1 className='text-3xl md:text-4xl font-bold text-gray-800'>Content Not Found</h1>
						<button onClick={() => navigate("/")} className='bg-[#ddc588] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c5ae77] transition-all'>
							Back to Home
						</button>
					</div>
				</section>
				<Footer />
			</>
		);
	}

	return (
		<>
			<Navbar />
			<section className='bg-[#f7f7f7] min-h-screen pb-16'>
				<div className='relative h-[55vh] md:h-[65vh] overflow-hidden'>
					<img src={`${BASE_URL}/${data.path_gambar}`} alt='Slide' className='w-full h-full object-cover scale-105' />
					<div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#f7f7f7]'></div>

					<div className='absolute bottom-10 left-1/2 -translate-x-1/2 w-full px-6 md:px-10 max-w-4xl text-white'>
						<button onClick={() => navigate("/")} className='flex items-center gap-2 mb-4 hover:text-[#ddc588] transition-all group'>
							<ArrowLeft size={20} className='group-hover:-translate-x-1 transition-transform' />
							<span className='font-medium'>Back to Home</span>
						</button>

						<h1 className='text-3xl md:text-5xl font-extrabold drop-shadow-lg'>{data.konten}</h1>
					</div>
				</div>
				<section className='px-6 md:px-10 lg:px-20 mt-20 mb-24'>
					<div className='max-w-4xl mx-auto'>
						<h2 className='text-[1.8rem] md:text-[2.2rem] font-bold text-[#111111] mb-6'>Informasi Lebih Lanjut</h2>

						<div
							className='
                bg-white
                border border-[rgba(0,0,0,0.12)]
                rounded-2xl
                p-6 md:p-10
                shadow-[0_10px_25px_rgba(0,0,0,0.09)]
                hover:shadow-[0_15px_32px_rgba(0,0,0,0.13)]
                transition-all duration-300
                mt-10 md:mt-14 lg:mt-16
              '
						>
							<div
								className='
                  h-[6px]
                  w-[70px]
                  rounded-full
                  bg-gradient-to-r from-[#ddc588] to-[#9fc4e8]
                  mb-6
                '
							></div>

							<p
								className='
                  text-[#222222]
                  text-[1.05rem]
                  md:text-lg
                  leading-[1.75rem]
                '
							>
								{data.konten}
							</p>
						</div>
					</div>
				</section>
			</section>

			<Footer />
		</>
	);
};

export default Carousel_detail_home;
