import MenuItem from "@/components/Menu/MenuItem";
import SectionHeaders from "@/components/Layout/SectionHeaders";
export default function HomeMenu() {
  return (
    <section>
      <div className="text-center mt-4 mb-4">
        <SectionHeaders subHeader={'check out'} mainHeader={'Menu'} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
