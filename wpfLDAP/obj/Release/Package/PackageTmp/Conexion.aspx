<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Conexion.aspx.cs" Inherits="wpfLDAP.Conexion" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataKeyNames="tp_SiteID,tp_ID" DataSourceID="SqlDataSource1">
            <Columns>
                <asp:BoundField DataField="tp_SiteID" HeaderText="tp_SiteID" ReadOnly="True" SortExpression="tp_SiteID" />
                <asp:BoundField DataField="tp_ID" HeaderText="tp_ID" ReadOnly="True" SortExpression="tp_ID" />
                <asp:CheckBoxField DataField="tp_DomainGroup" HeaderText="tp_DomainGroup" SortExpression="tp_DomainGroup" />
                <asp:BoundField DataField="tp_Deleted" HeaderText="tp_Deleted" SortExpression="tp_Deleted" />
                <asp:CheckBoxField DataField="tp_SiteAdmin" HeaderText="tp_SiteAdmin" SortExpression="tp_SiteAdmin" />
                <asp:CheckBoxField DataField="tp_IsActive" HeaderText="tp_IsActive" SortExpression="tp_IsActive" />
                <asp:BoundField DataField="tp_Login" HeaderText="tp_Login" SortExpression="tp_Login" />
                <asp:BoundField DataField="tp_Title" HeaderText="tp_Title" SortExpression="tp_Title" />
                <asp:BoundField DataField="tp_Email" HeaderText="tp_Email" SortExpression="tp_Email" />
                <asp:BoundField DataField="tp_Notes" HeaderText="tp_Notes" SortExpression="tp_Notes" />
                <asp:BoundField DataField="tp_ExternalTokenLastUpdated" HeaderText="tp_ExternalTokenLastUpdated" SortExpression="tp_ExternalTokenLastUpdated" />
                <asp:BoundField DataField="tp_Locale" HeaderText="tp_Locale" SortExpression="tp_Locale" />
                <asp:BoundField DataField="tp_CalendarType" HeaderText="tp_CalendarType" SortExpression="tp_CalendarType" />
                <asp:BoundField DataField="tp_AdjustHijriDays" HeaderText="tp_AdjustHijriDays" SortExpression="tp_AdjustHijriDays" />
                <asp:BoundField DataField="tp_TimeZone" HeaderText="tp_TimeZone" SortExpression="tp_TimeZone" />
                <asp:CheckBoxField DataField="tp_Time24" HeaderText="tp_Time24" SortExpression="tp_Time24" />
                <asp:BoundField DataField="tp_AltCalendarType" HeaderText="tp_AltCalendarType" SortExpression="tp_AltCalendarType" />
                <asp:BoundField DataField="tp_CalendarViewOptions" HeaderText="tp_CalendarViewOptions" SortExpression="tp_CalendarViewOptions" />
                <asp:BoundField DataField="tp_WorkDays" HeaderText="tp_WorkDays" SortExpression="tp_WorkDays" />
                <asp:BoundField DataField="tp_WorkDayStartHour" HeaderText="tp_WorkDayStartHour" SortExpression="tp_WorkDayStartHour" />
                <asp:BoundField DataField="tp_WorkDayEndHour" HeaderText="tp_WorkDayEndHour" SortExpression="tp_WorkDayEndHour" />
                <asp:BoundField DataField="tp_Mobile" HeaderText="tp_Mobile" SortExpression="tp_Mobile" />
                <asp:BoundField DataField="tp_Flags" HeaderText="tp_Flags" SortExpression="tp_Flags" />
            </Columns>
        </asp:GridView>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:WSS_Content_SintegConnectionString %>" SelectCommand="SELECT * FROM [UserInfo]"></asp:SqlDataSource>
    </form>
</body>
</html>
