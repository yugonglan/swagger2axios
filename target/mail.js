import request from '@/plugins/axios'
export function postmail(data){return request({url: '/mail ',method:'post',data})}export function getmailall(){return request({url: '/mail/all ',method:'get',})}export function getmailidByemailId(emailId,){return request({url: `/mail/id/${emailId} `,method:'get',})}export function deletemailByemailId(emailId,){return request({url: `/mail/${emailId} `,method:'delete',})}