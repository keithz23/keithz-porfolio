import {
  Code,
  Layout,
  Search,
  ShoppingBag,
  Smartphone,
  PenToolIcon as Tool,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "code":
        return <Code className="h-6 w-6" />;
      case "layout":
        return <Layout className="h-6 w-6" />;
      case "smartphone":
        return <Smartphone className="h-6 w-6" />;
      case "shopping-bag":
        return <ShoppingBag className="h-6 w-6" />;
      case "search":
        return <Search className="h-6 w-6" />;
      case "tool":
        return <Tool className="h-6 w-6" />;
      default:
        return <Code className="h-6 w-6" />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-[#0989ff]/30 hover:shadow-md transition-all group">
      <div className="flex items-center justify-center size-16 rounded-xl bg-[#0989ff]/10 text-[#0989ff] mb-6 group-hover:bg-[#0989ff] group-hover:text-white transition-colors">
        {getIcon()}
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-[#0989ff] transition-colors">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
