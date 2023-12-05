import CommingSoon from "@/components/common/CommingSoon";
import Cover from "@/components/common/Cover";

/**
 * comming soon page
 * @returns
 */
const CommingSoonPage = () => {
  return (
    <Cover
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <CommingSoon />
    </Cover>
  );
};

export default CommingSoonPage;
