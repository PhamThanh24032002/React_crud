function App() {
    //truyen tu cha xuong con
    // let app_variables = 'application'
    // Todolisṭ(app_variables);
    //truyenf tu con len cha
    Todolisṭ(
        function (DataFromchildren) {
            console.log(DataFromchildren);
        }
    );
}
function Todolisṭ(DataFromParent) {
    //truyen tu con len cha
    let childrentValue = "childentities"
    useCallback(childrentValue);

    //con nhan su truyen cua tg cha 
    // console.log(DataFromParent);
}
//gọi là prop (data truyen qua truyen lai)
// truyeenf data tư cha cho con --> truyen tham so string funtion -->
// truyền từ con lên cha --> dùng callbacks --> 

