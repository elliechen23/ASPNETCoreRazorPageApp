﻿// Write your Javascript code.
var waiting4payment = '<span class="label label-primary">Waiting4Payment</span>'
var finished = '<span class="label label-success">Finished</span>'
var pending = '<span class="label label-info">Pending</span>'
var paymenterror = '<span class="label label-warning">PaymentError</span>'
var cancelled = '<span class="label label-danger">Cancelled</span>'
var fontRed = ' style="color:red"'
var fontDefault = ' style=""'
var PaidInterestDate="";
function formatAmount(TXMemo) {
        var newAmountStyle="";
        if (TXMemo == "交易金額疑輸錯") {
            newAmountStyle = fontRed
        } else {
            newAmountStyle = fontDefault
        }
        return newAmountStyle;
}
function formatBalance(TXMemo) {
        var newBalanceStyle="";
        if (TXMemo == "交易面額疑輸錯") {
            newBalanceStyle = fontRed
        } else {
            newBalanceStyle = fontDefault
        }
        return newBalanceStyle;
}
function formatTXStatus(status) {
        var status_label="";

        if (status=="Pending") {
            status_label=pending
        }
        if (status=="Finished") {
            status_label=finished
        }
        if (status=="Cancelled") {
            status_label=cancelled
        }
        if (status=="Waiting4Payment") {
            status_label=waiting4payment
        }
        if (status=="PaymentError") {
            status_label=paymenterror
        }


         return status_label;
}

function formatApproveFlag(flag) {
        var flag_label="";

        if (flag=="0") {
            flag_label=" 0 - 成功(預設)"
        }
        if (flag=="1") {
            flag_label=" 1 - 等待回應"
        }
        if (flag=="2") {
            flag_label=" 2 - 款不足"
        }
        if (flag=="3") {
            flag_label=" 3 - 系統錯誤"
        }
        if (flag=="5") {
            flag_label=" 5 - 自動檢核"
        }


         return flag_label;
}

function numberWithCommas(number) {
         var parts = number.toString().split(".");
         parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
         return parts.join(".");
}

