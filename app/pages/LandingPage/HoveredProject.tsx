const HoveredProject = ({
  hoveredProject,
  className,
}: {
  hoveredProject: string;
  className?: string;
}) => {
  switch (hoveredProject) {
    case "Horizon360":
      return (
        <>
          <img className="primary-project-img" src="/images/h360_desktop.png" />
          <img
            className="secondary-project-img hidden sm:block"
            src="/images/H360_app_mobile.png"
          />
          <img
            className="tertiary-project-img hidden sm:block"
            src="/images/H360_app_desk.png"
          />
        </>
      );
    case "5%Nutrition":
      return (
        <>
          <img
            className="primary-project-img"
            src="/images/5nutrition_desktop.png"
          />
          <img
            className="secondary-project-img hidden sm:block "
            src="/images/5nutrition_mobile.png"
          />
        </>
      );
    case "SPRO":
      return (
        <>
          <img className="primary-project-img" src="/images/spro_desktop.png" />
          <img
            className="secondary-project-img hidden sm:block "
            src="/images/spro_mobile.png"
          />
        </>
      );
    case "DH":
      return (
        <>
          <img className="primary-project-img" src="/images/DH_desktop.png" />
          <img
            className="secondary-project-img hidden sm:block "
            src="/images/DH_mobile.png"
          />
        </>
      );
    case "Factspan":
      return (
        <>
          <img
            className="primary-project-img"
            src="/images/factspan_desktop.png"
          />
          <img
            className="secondary-project-img hidden sm:block "
            src="/images/factspan_mobile.png"
          />
        </>
      );
    default:
      return (
        <>
          <img className="primary-project-img" src="/images/h360_desktop.png" />
          <img
            className="secondary-project-img hidden sm:block"
            src="/images/H360_app_mobile.png"
          />
          <img
            className="tertiary-project-img hidden sm:block"
            src="/images/H360_app_desk.png"
          />
        </>
      );
  }
};

export default HoveredProject;
