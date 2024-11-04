import { Link } from 'react-router-dom';
import style from './LandingPageCms.module.scss'; // Import the SCSS file

const LandingPageCms = () => {
	return (
		<div className={style.app_container}>
			<header className={style.header_container}>
				<h1 className={style.site_title}>CMS Portal</h1>
			</header>

			<nav className={style.nav_container}>
				<ul className={style.nav_list}>
					<li className={style.nav_item}>
						<Link
							to='/create_questions'
							className={(style.nav_link, style.btn_create)}
						>
							Create Questions
						</Link>
					</li>
					<li className={style.nav_item}>
						<Link
							to='/view_analytics'
							className={(style.nav_link, style.btn_analytics)}
						>
							View Analytics
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default LandingPageCms;
