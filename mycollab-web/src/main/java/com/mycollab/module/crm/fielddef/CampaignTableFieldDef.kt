/**
 * Copyright © MyCollab
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package com.mycollab.module.crm.fielddef

import com.mycollab.common.TableViewField
import com.mycollab.common.i18n.GenericI18Enum
import com.mycollab.module.crm.i18n.CampaignI18nEnum
import com.mycollab.vaadin.web.ui.WebUIConstants

/**
 * @author MyCollab Ltd
 * @since 6.0.0
 */
object CampaignTableFieldDef {
    @JvmField
    val selected = TableViewField(null, "selected", WebUIConstants.TABLE_CONTROL_WIDTH)

    @JvmField
    val action = TableViewField(null, "id", WebUIConstants.TABLE_ACTION_CONTROL_WIDTH)

    @JvmField
    val actualcost = TableViewField(CampaignI18nEnum.FORM_ACTUAL_COST, "actualcost", WebUIConstants.TABLE_M_LABEL_WIDTH)

    @JvmField
    val budget = TableViewField(CampaignI18nEnum.FORM_BUDGET, "budget", WebUIConstants.TABLE_M_LABEL_WIDTH)

    @JvmField
    val campaignname = TableViewField(GenericI18Enum.FORM_NAME, "campaignname", WebUIConstants.TABLE_X_LABEL_WIDTH)

    @JvmField
    val status = TableViewField(GenericI18Enum.FORM_STATUS, "status", WebUIConstants.TABLE_M_LABEL_WIDTH)

    @JvmField
    val type = TableViewField(GenericI18Enum.FORM_TYPE, "type", WebUIConstants.TABLE_M_LABEL_WIDTH)

    @JvmField
    val expectedCost = TableViewField(CampaignI18nEnum.FORM_EXPECTED_COST, "expectedcost", WebUIConstants.TABLE_M_LABEL_WIDTH)

    @JvmField
    val expectedRevenue = TableViewField(CampaignI18nEnum.FORM_EXPECTED_REVENUE, "expectedrevenue", WebUIConstants.TABLE_X_LABEL_WIDTH)

    @JvmField
    val endDate = TableViewField(GenericI18Enum.FORM_END_DATE, "enddate", WebUIConstants.TABLE_DATE_WIDTH)

    @JvmField
    val startDate = TableViewField(GenericI18Enum.FORM_START_DATE, "startdate", WebUIConstants.TABLE_DATE_WIDTH)

    @JvmField
    val assignUser = TableViewField(GenericI18Enum.FORM_ASSIGNEE, "assignUserFullName", WebUIConstants.TABLE_X_LABEL_WIDTH)
}