
myArray=("Address" "Appointment" "Category" "ConfirmationNote" "Password" \
"ProductInStores" "ProductsInRequests" "Provider" "Request" "Role" "Shipment" \
"ShippedGoods" "Shop" "Stock" "StoreInventory" "Trademark" "Units" "User" "WarehouseInventory" "Product" )

# shellcheck disable=SC2068
for str in ${myArray[@]}; do
  touch "${str}Controller.java"
  # shellcheck disable=SC2129
  echo "package com.example.angular_spring_boot_java.controller;" >> "${str}Controller.java"
  echo "import com.example.angular_spring_boot_java.model.${str};" >> "${str}Controller.java"
  echo "import com.example.angular_spring_boot_java.service.${str}Service;" >> "${str}Controller.java"
  echo "import org.springframework.beans.factory.annotation.Autowired;" >> "${str}Controller.java"
  echo "import org.springframework.web.bind.annotation.RequestMapping;" >> "${str}Controller.java"
  echo "import org.springframework.web.bind.annotation.RestController;" >> "${str}Controller.java"
  echo "@RestController" >> "${str}Controller.java"
  echo "@RequestMapping(\"/rest-api/${str:l}\")" >> "${str}Controller.java"
  echo "public class ${str}Controller extends BaseController<${str}Service, ${str}> {" >> "${str}Controller.java"
  echo "@Autowired" >> "${str}Controller.java"
  echo "public ${str}Controller(${str}Service service) {" >> "${str}Controller.java"
  echo "super(service);" >> "${str}Controller.java"
  echo "}" >> "${str}Controller.java"
  echo "}" >> "${str}Controller.java"
done