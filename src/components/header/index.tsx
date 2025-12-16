import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "./header.css";
import acredityImg from "/assets/akreditas.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRequest } from "../../utils/api-call";

export interface Metadata {
	totalItems: number;
	totalPages: number;
	currentPage: number;
	limit: number;
}

export interface Penuli {
	user_id: string;
	username: string;
	email: string;
	password_hash: string;
	nama_lengkap: string;
	role_id: number;
	jabatan?: string;
	created_at: string;
	updated_at: string;
	login_terakhir?: string;
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
	jenjang_id?: string;
	penulis_user_id: string;
	editor_user_id?: string;
	jenjang?: string;
	penulis: Penuli;
}

export interface CarouselsResponse {
	message: string;
	metadata: Metadata;
	data: Data[];
}

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Header = () => {
	const navigate = useNavigate();
	const [data, setData] = useState<CarouselsResponse["data"]>([]);

	const handleNavigate = (id: string) => {
		navigate(`/carousel-detail/${id}`);
	};

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await getRequest(`carousels?page=1&limit=10`);
				setData(response.data);
				console.log(response);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, []);

	return (
		<div className='relative px-4 sm:px-6 lg:px-8 py-6 lg:py-8'>
			<div className='header-carousel-container relative'>
				{/* Fixed Akreditasi Badge */}
				<div className='akreditasi-badge'>
					<img src={acredityImg} alt='Akreditasi' className='akreditasi-img' />
				</div>

				<Swiper
					modules={[Autoplay, Pagination, EffectCoverflow]}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}}
					loop={true}
					centeredSlides={true}
					slidesPerView='auto'
					spaceBetween={60}
					pagination={{ clickable: true, dynamicBullets: true }}
					effect='coverflow'
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 150,
						modifier: 2,
						slideShadows: false,
					}}
					className='header-swiper'
				>
					{data
						.filter((slide) => slide.is_published && slide.is_featured)
						.map((slide) => (
							<SwiperSlide key={slide.carousel_id} className='carousel-slide cursor-pointer' onClick={() => handleNavigate(slide.carousel_id)}>
								<div className='slide-image' style={{ backgroundImage: `url(${BASE_URL}/${slide.path_gambar})` }}>
									<div className='slide-content'>{slide.konten}</div>
								</div>
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</div>
	);
};

export default Header;
