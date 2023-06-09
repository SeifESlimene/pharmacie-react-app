// import { useRouter } from "next/router";
// import { connect } from "react-redux";
// import { updateProductCategory } from "../../../redux/action/productFiltersAction";
import category5 from "../../../imgs/theme/icons/category-5.svg" 
import category4 from "../../../imgs/theme/icons/category-4.svg" 
import category3 from "../../../imgs/theme/icons/category-3.svg" 
import category2 from "../../../imgs/theme/icons/category-2.svg" 
import category1 from "../../../imgs/theme/icons/category-1.svg" 

// const CategoryProduct2 = ({ updateProductCategory }) => {
const CategoryProduct2 = () => {




    // const router = useRouter();

    // const removeSearchTerm = () => {
    //     router.push({
    //         pathname: "/products",
    //     });
    // };

    const selectCategory = (e, category) => {
        e.preventDefault();
        // removeSearchTerm();
        // updateProductCategory(category);
        // router.push({
        //     pathname: "/products",
        //     query: {
        //         cat: category, //
        //     },
        // });
    };
    return (
        <>
            <ul>
                <li onClick={(e) => selectCategory(e, "jeans")}>
                    <a>
                        <img
                            src={category1}
                            alt=""
                        />
                        Milks & Dairies
                    </a>
                    
                </li>
                <li onClick={(e) => selectCategory(e, "shoe")}>
                    <a>
                        <img
                            src={category2}
                            alt=""
                        />
                        Clothing
                    </a>
                    
                </li>
                <li onClick={(e) => selectCategory(e, "jacket")}>
                    <a>
                        <img
                            src={category3}
                            alt=""
                        />
                        Pet Foods{" "}
                    </a>
                    
                </li>
                <li onClick={(e) => selectCategory(e, "trousers")}>
                    <a>
                        <img
                            src={category4}
                            alt=""
                        />
                        Baking material
                    </a>
                    
                </li>
                <li onClick={(e) => selectCategory(e, "accessories")}>
                    <a>
                        <img
                            src={category5}
                            alt=""
                        />
                        Fresh Fruit
                    </a>
                </li>
            </ul>
        </>
    );
};

// export default connect(null, { updateProductCategory })(CategoryProduct2);
export default CategoryProduct2;
