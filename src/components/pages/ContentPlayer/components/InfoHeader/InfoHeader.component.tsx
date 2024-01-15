import style from './InfoHeader.module.scss';

const InfoHeader = () => {
	return (
		<div className={style.header_wrapper}>
			<div className={style.header_flex}>
				<div className={style.header_left}>
					<div className={style.module_wrapper}>
						<div className={style.module_title}>
							Title of the full Lesson bundle
						</div>
						<div className={style.module_arrow}>
							<i className='fa-solid fa-chevron-down'></i>
						</div>
					</div>
					<div className={style.lesson_wrapper}>
						Lesson 3. The title of the lesson that is opened
					</div>
				</div>
				<div className={style.header_right}>
					<div className={style.right_left}>
						<i className='fa-solid fa-magnifying-glass'></i>
					</div>
					<div className={style.right_right}>
						<span className={style.list_title}>
							<i className='fa-solid fa-bookmark'></i>
						</span>
						<span className={style.list_title}>
							<i className='fa-solid fa-heart'></i>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InfoHeader;
