import styles from "./logoLoader.module.scss";
function logoLoader() {
  return (
    <div className={styles.logo_loader}>
      <img
        src="https://movie-booking-project.vercel.app/img/logoTixLoading.png"
        alt="logoloader"
      />
    </div>
  );
}

export default logoLoader;
