import { motion, useMotionValue, useTransform } from "framer-motion";
import type { Product } from "@/types/product";
import CustomCheckBox from "@/components/customCheckBox";

interface PurchaseItemProps {
    product:Product,
    checked:boolean,
    onToggle:()=>void,
    onRemove:()=>void,
}

const PurchaseItem = ({product,checked,onToggle,onRemove}:PurchaseItemProps) => {

    const x = useMotionValue(0);
    const backgroundColor  = useTransform(
        x,
        [0,50,150],
        ["#ffffff", "#fee2e2", "#ef4444"]
    );

    return(
        <motion.div 
            drag="x"
            dragConstraints= {{left:0, right:0}}
            onDragEnd={(_,info)=>{
                if (info.offset.x > 120) {
                    onRemove()
                }
            }}
            style={{
                x,
                backgroundColor ,
            }}
            className="flex flex-row gap-2 items-center"
        >   
            <CustomCheckBox
                checked={checked}
                onChange={onToggle}
            />
            <div
                className={`${checked ? "line-through text-gre1":""}`}
            >
                {product.name}
            </div>
        </motion.div>
    )
}

export default PurchaseItem