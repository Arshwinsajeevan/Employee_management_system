from django.urls import path
from .views import (
    EmployeeCreateView,
    EmployeeDetailView,
    ActiveEmployeeListView
)

urlpatterns = [
    path('employees/', EmployeeCreateView.as_view(), name='add-employee'),
    path('employees/<int:employee_id>/', EmployeeDetailView.as_view(), name='employee-detail'),
    path('employees/active/', ActiveEmployeeListView.as_view(), name='active-employees'),
]
